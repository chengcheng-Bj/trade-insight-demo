# 国际贸易获利计算器

## 项目简介
本项目提供一个 *纯前端 的盈亏计算器，支持 Amazon FBA / FBM 双模式，并集成 TikTok 爆款潜力评分 与 实时汇率。
所有数据均来源于公开的免费 API（exchangerate.host）以及自行爬取的 TikTok 视频数据，不涉及后端服务器、数据库或密钥...  

```markdown
国际贸易获利计算器

项目简介
本项目提供一个 纯前端 的盈亏计算器，支持 Amazon FBA / FBM 双模式，并集成 TikTok 爆款潜力评分 与 实时汇率。
所有数据均来源于公开的免费 API（exchangerate.host）以及自行爬取的 TikTok 视频数据，不涉及后端服务器、数据库或密钥。

功能特性
- 利润 / ROI 计算（支持 FBA 与 FBM 两种运费模式）  
- 实时汇率（exchangerate.host）并在页面底部注明来源  
- TikTok 潜力评分（标签：Shares、Saves、Engagement、Freshness、Author Influence）  
- 每日最多 4 条输出（热卖 2 条 + 潜力 2 条）  
- 风险免责声明：费用、时效受物流公司、季节、航线、不可抗力等因素影响，仅供参考  

部署方式（GitHub → Cloudflare Pages）

1️⃣ 创建 GitHub 仓库
- 登录 GitHub → New repository → 填写仓库名（如 `trade-insight-demo`）  
- 可选 Private（推荐） → 勾选 Initialize with a README → Create repository  

2️⃣ 上传项目文件
将以下文件（`index.html`、`README.md`、`LICENSE`、`.github/workflows/deploy.yml`）添加到仓库根目录。  
> 若不需要 CI，可不上传 `.github` 目录。

3️⃣ 在 Cloudflare Pages 创建项目
1. 登录 Cloudflare Dashboard → Workers & Pages → Pages → Create application  
2. 选择 Connect to Git → GitHub → Authorize Cloudflare（首次授权）  
3. 在仓库列表中找到刚才创建的仓库，点 Begin setup  
4. 配置：  
   - Project name：`trade-insight-demo`（或自定义）  
   - Production branch：`main`  
   - Framework preset：None（因为是纯 HTML）  
   - Build command：留空  
   - Build output directory：`/...  

   - Build output directory：`/`（根目录）  
5. 点击 Save and Deploy，系统会自动拉取仓库并部署。首次部署完成后会得到类似：

```
https://trade-insight-demo.<subdomain>.pages.dev
```

### 4️⃣ 验证与后续更新
- 打开上述 URL，检查页面是否正常渲染（盈亏计算器、汇率提示、风险声明均显示）。  
- 以后每次修改 `index.html`（或其它文件）后，只需 git add & commit & push，Cloudflare Pages 会自动重新部署，
几秒内即可生效。

## 可选：绑定自定义域名
在 Cloudflare Pages 项目页面 → Custom domains → 输入您已备案的域名（如 `calc.yourdomain.com`），
系统会自动创建 CNAME 并启用免费 SSL。

## 许可证
本项目采用 MIT License（见 `LICENSE`），您可以自由使用、修改、分发代码。

---

祝使用愉快