# Vercel部署指南 / Vercel Deployment Guide

本指南将教你如何将电子签名工具部署到Vercel平台，并配置Google Ads广告。

This guide will teach you how to deploy the Digital Signature Tool to Vercel and configure Google Ads.

## 📋 部署前准备 / Prerequisites

### 1. 注册账号 / Account Registration

- **GitHub账号**: [https://github.com](https://github.com)
- **Vercel账号**: [https://vercel.com](https://vercel.com) (建议用GitHub登录)
- **Google AdSense账号**: [https://www.google.com/adsense](https://www.google.com/adsense)

### 2. 代码准备 / Code Preparation

确保你的项目包含以下文件：
- `index.html` - 主页面
- `styles.css` - 样式文件
- `signature.js` - 功能脚本
- `i18n.js` - 国际化支持
- `vercel.json` - Vercel配置文件
- `README.md` - 项目说明

## 🚀 Vercel部署步骤 / Vercel Deployment Steps

### 步骤1: 上传到GitHub / Step 1: Upload to GitHub

1. **创建新仓库 / Create New Repository**
   ```bash
   # 在项目目录中
   git init
   git add .
   git commit -m "Initial commit: Digital Signature Tool"
   ```

2. **推送到GitHub / Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/digital-signature-tool.git
   git branch -M main
   git push -u origin main
   ```

### 步骤2: 连接Vercel / Step 2: Connect Vercel

1. **登录Vercel** - 访问 [vercel.com](https://vercel.com)
2. **导入项目** - 点击 "New Project"
3. **选择仓库** - 选择你刚创建的GitHub仓库
4. **配置部署** - Vercel会自动检测项目类型

### 步骤3: 配置部署设置 / Step 3: Configure Deployment

1. **项目名称**: `digital-signature-tool` (或自定义)
2. **框架预设**: 选择 "Other" 或 "Static"
3. **根目录**: `.` (默认)
4. **构建命令**: 留空 (静态网站)
5. **输出目录**: `.` (默认)

### 步骤4: 部署 / Step 4: Deploy

点击 **"Deploy"** 按钮，等待部署完成。

部署完成后，你将获得：
- 生产环境URL: `https://your-project-name.vercel.app`
- 预览URL: `https://your-project-name-git-main-username.vercel.app`

## 🔧 Google Ads 配置 / Google Ads Configuration

### 步骤1: 申请AdSense / Step 1: Apply for AdSense

1. 访问 [Google AdSense](https://www.google.com/adsense)
2. 添加你的网站: `https://your-project-name.vercel.app`
3. 等待审核通过

### 步骤2: 创建广告单元 / Step 2: Create Ad Units

1. **登录AdSense控制台**
2. **广告 → 概览 → 按广告单元 → 新建广告单元**
3. **创建展示广告**:
   - 名称: `左侧广告` / `Left Sidebar Ad`
   - 形状: 竖屏 (160x600)
   - 类型: 展示广告

4. **再创建一个**:
   - 名称: `右侧广告` / `Right Sidebar Ad`
   - 形状: 竖屏 (160x600)
   - 类型: 展示广告

### 步骤3: 获取代码 / Step 3: Get Ad Code

复制广告代码，包含：
- 发布商ID: `ca-pub-XXXXXXXXXXXXXXXXX`
- 广告单元ID: `1234567890` 和 `0987654321`

### 步骤4: 更新代码 / Step 4: Update Code

在 `index.html` 中替换：
```html
<!-- 替换发布商ID -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"></script>

<!-- 替换左侧广告位 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
     data-ad-slot="YOUR_LEFT_AD_UNIT_ID"
     data-ad-format="vertical"></ins>

<!-- 替换右侧广告位 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
     data-ad-slot="YOUR_RIGHT_AD_UNIT_ID"
     data-ad-format="vertical"></ins>
```

### 步骤5: 重新部署 / Step 5: Redeploy

```bash
git add .
git commit -m "Add Google Ads configuration"
git push origin main
```

Vercel会自动重新部署。

## ⚙️ 高级配置 / Advanced Configuration

### 自定义域名 / Custom Domain

1. **Vercel控制台** → 选择项目 → **Settings** → **Domains**
2. 添加你的域名: `yourdomain.com`
3. 按照提示配置DNS记录

### 环境变量 / Environment Variables

如需配置环境变量:
1. **Settings** → **Environment Variables**
2. 添加变量，如:
   - `GOOGLE_ADSENSE_ID`: 你的AdSense发布商ID
   - `ANALYTICS_ID`: Google Analytics ID

### 性能优化 / Performance Optimization

已在 `vercel.json` 中配置:
- 缓存策略
- 安全头
- 压缩设置

## 📊 SEO优化建议 / SEO Optimization Tips

### 1. 关键词策略 / Keyword Strategy

主要关键词:
- `digital signature tool`
- `online signature generator`
- `free electronic signature`
- `PDF signature creator`
- `signature export PNG PDF`

### 2. 内容优化 / Content Optimization

- ✅ 已添加结构化数据 (Schema.org)
- ✅ 已添加Open Graph标签
- ✅ 已添加Twitter Card标签
- ✅ 已添加多语言支持

### 3. 技术SEO / Technical SEO

- ✅ 响应式设计
- ✅ 快速加载速度
- ✅ 移动端优化
- ✅ 安全HTTPS

## 🔍 监控和分析 / Monitoring & Analytics

### Google Analytics

1. 创建GA4属性
2. 在 `index.html` 添加跟踪代码:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加网站资源
3. 验证所有权
4. 提交网站地图

## 🐛 常见问题 / Troubleshooting

### 部署失败

**问题**: Build failed
**解决**: 检查 `vercel.json` 配置是否正确

**问题**: 404错误
**解决**: 确保 `index.html` 在根目录

### 广告不显示

**问题**: 广告位空白
**解决**:
1. 确认AdSense审核通过
2. 检查广告单元ID正确
3. 等待24-48小时生效

### 多语言问题

**问题**: 语言切换不工作
**解决**: 检查 `i18n.js` 文件加载顺序

## 📈 收益优化建议 / Revenue Optimization

### 1. 广告位置

- **侧边栏广告**: 160x600 竖版广告
- **仅在桌面端显示**: 移动端隐藏避免影响用户体验

### 2. 用户体验平衡

- 广告不遮挡主要功能
- 在大屏幕时显示，小屏幕时隐藏
- 加载速度优化

### 3. 流量增长

- SEO优化提高搜索排名
- 社交媒体分享
- 内容营销
- 外链建设

## 🔄 更新部署 / Update Deployment

每次代码更新后:
```bash
git add .
git commit -m "Update: [描述更新内容]"
git push origin main
```

Vercel会自动重新部署并提供预览链接。

## 📞 技术支持 / Technical Support

如遇问题，可以：
- 查看Vercel部署日志
- 检查浏览器开发者工具
- 访问Vercel官方文档
- 联系技术支持

---

**部署成功后，别忘了测试所有功能并分享你的应用！**

**After successful deployment, don't forget to test all features and share your app!**