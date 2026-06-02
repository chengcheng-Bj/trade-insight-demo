export default {
  async fetch(req) {
    const url = new URL(req.url);
    
    // 运费接口
    if (url.pathname === '/api/shipping') {
      const weight = parseFloat(url.searchParams.get('weight'));
      const cost = weight * 15; // 简单示例：15元/kg
      return new JSON.stringify({ cost });
    }

    // TikTok 接口（示例）
    if (url.pathname === '/api/tiktok') {
      return new Response(JSON.stringify([
        { title: "爆款化妆刷", price: "$12.99" },
        { title: "无线耳机", price: "$29.99" }
      ]), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // 前端页面
    if (url.pathname === '/') {
      let html = await fetch('https://your-repo-url/frontend/index.html').text();
      // 替换占位符
      html = html.replace('{{LOGISTICS_DATA}}', `<script>console.log('后端已连接')</script>`);
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not Found", { status: 404 });
  }
};
