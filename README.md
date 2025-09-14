# 电子签名工具 / Digital Signature Tool

一个现代化的电子签名网页应用，采用ChatGPT和Apple风格的UI设计，支持多语言国际化。**专注于签名创建和导出**，而非PDF内签名。

A modern digital signature web application with ChatGPT and Apple-style UI design, supporting multilingual internationalization. **Focused on signature creation and export**, not in-PDF signing.

## ✨ 核心特性 / Core Features

- 🎨 **现代UI设计** - 采用ChatGPT和Apple风格的界面设计
- 🌍 **10种语言支持** - 联合国常用语言 + 中日韩语言
- 📱 **完全响应式** - 完美适配桌面端和移动端
- ✍️ **流畅手写** - 支持鼠标和触摸屏手写签名
- 🎨 **自定义画笔** - 5种预设颜色 + 自定义颜色选择
- 💾 **双格式导出** - **导出独立的PNG图片和PDF文档**
- 📏 **智能裁剪** - PDF自动裁剪到最小尺寸，无时间戳
- 🌙 **暗色模式** - 自动适配系统主题偏好
- 💰 **Google Ads** - 集成Google广告位，支持商业化

## 🎯 产品定位 / Product Positioning

**本工具专门用于创建和导出签名文件，而非在现有PDF中签名。**

**This tool is specifically designed for creating and exporting signature files, not for signing existing PDFs.**

### 核心用途 / Primary Use Cases:
- ✅ 创建个人数字签名
- ✅ 导出PNG签名图片用于插入文档
- ✅ 导出PDF签名文档用于打印或存档
- ✅ 为各种文档准备签名素材

### 非用途 / Not For:
- ❌ 在现有PDF文档上直接签名
- ❌ PDF文档编辑或注释
- ❌ 复杂的文档处理工作流

## 🚀 快速开始 / Quick Start

### 在线使用 / Online Usage
访问部署的应用: [您的域名]

### 本地开发 / Local Development
```bash
# 克隆项目
git clone [repository-url]
cd dianziqianming

# 启动本地服务器
python -m http.server 8000
# 或使用其他HTTP服务器
npx serve .

# 访问应用
open http://localhost:8000
```

## 📁 项目结构 / Project Structure

```
dianziqianming/
├── index.html          # 主页面 (包含SEO优化)
├── styles.css          # Apple风格样式 + 广告位样式
├── signature.js        # 签名功能 + PDF优化导出
├── i18n.js            # 10种语言国际化支持
├── vercel.json        # Vercel部署配置
├── DEPLOYMENT.md      # 详细部署指南
└── README.md          # 项目文档
```

## 🌐 多语言支持 / Multi-language Support

支持10种主要语言:
- 🇨🇳 **中文 (Chinese)**
- 🇺🇸 **英语 (English)**
- 🇪🇸 **西班牙语 (Español)**
- 🇫🇷 **法语 (Français)**
- 🇷🇺 **俄语 (Русский)**
- 🇸🇦 **阿拉伯语 (العربية)**
- 🇯🇵 **日语 (日本語)**
- 🇰🇷 **韩语 (한국어)**
- 🇵🇹 **葡萄牙语 (Português)**
- 🇩🇪 **德语 (Deutsch)**

### 语言特性:
- **智能检测**: 自动识别浏览器语言
- **手动切换**: 顶部语言选择器
- **持久存储**: 记住用户语言偏好
- **RTL支持**: 阿拉伯语右到左显示

## 💾 导出功能 / Export Features

### PNG图片导出
- **高质量图片**: 原始分辨率导出
- **透明背景**: 适合插入任何文档
- **即时下载**: 点击即可保存到本地

### PDF文档导出 ⭐ **优化特性**
- **智能裁剪**: 自动检测签名边界，生成最小尺寸PDF
- **无时间戳**: 纯净签名，无多余信息
- **自适应尺寸**: PDF尺寸完美匹配签名内容
- **高清质量**: 矢量化处理，支持任意缩放

## 💰 商业化功能 / Monetization Features

### Google Ads集成
- **侧边栏广告**: 左右两侧160x600广告位
- **响应式展示**: 仅在大屏幕显示，移动端隐藏
- **用户友好**: 不影响核心功能使用
- **收益优化**: 针对工具类应用优化的广告策略

### 配置步骤:
1. 申请Google AdSense账号
2. 创建广告单元
3. 替换HTML中的发布商ID和广告单元ID
4. 部署更新

## 🚀 Vercel部署 / Vercel Deployment

### 一键部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/digital-signature-tool)

### 手动部署
详细步骤请查看 [DEPLOYMENT.md](DEPLOYMENT.md)

1. **准备GitHub仓库**
2. **连接Vercel**
3. **配置Google Ads**
4. **自定义域名**
5. **SEO优化**

## 🎨 设计系统 / Design System

### Apple风格设计语言
- **色彩系统**: #007AFF 主色调，统一的色彩变量
- **圆角设计**: 一致的圆角半径系统
- **阴影效果**: 分层的阴影深度
- **流畅动画**: 自然的过渡效果

### ChatGPT配色方案
- **现代化**: 干净简洁的界面设计
- **高对比度**: 优秀的可读性
- **品牌一致性**: 统一的视觉语言

## 📱 技术规格 / Technical Specifications

### 兼容性
- **桌面浏览器**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **移动浏览器**: iOS Safari 12+, Chrome Mobile 60+
- **屏幕尺寸**: 320px - 1920px 完全响应式

### 技术栈
- **前端**: 原生JavaScript (ES6+)
- **样式**: CSS3 + CSS变量
- **PDF生成**: jsPDF (优化版)
- **画布绘图**: HTML5 Canvas API
- **国际化**: 自定义轻量级i18n

### 性能优化
- **首屏加载**: < 2秒
- **资源压缩**: Gzip + Brotli
- **缓存策略**: 强缓存 + 协商缓存
- **CDN加速**: Vercel Edge Network

## 🔍 SEO优化 / SEO Optimization

### 关键词策略
**主要关键词**:
- 中文: 手写签名, 电子手写签名, 在线签名, 签名生成器, 签名 PNG, 签名 PDF
- English: digital signature tool, online signature generator, free signature creator, export signature PNG PDF, electronic signature maker

### 技术SEO
- ✅ **结构化数据** - Schema.org标记
- ✅ **语义化HTML** - 正确的标签使用
- ✅ **多语言支持** - `?lang=xx` + hreflang + `<html lang/dir>` 动态更新（阿拉伯语RTL）
- ✅ **移动优先** - 响应式设计
- ✅ **快速加载** - 性能优化
- ✅ **安全HTTPS** - SSL证书

### 内容优化
- ✅ **标题优化** - 每种语言的 `metaTitle`
- ✅ **描述标签** - 每种语言的 `metaDescription`
- ✅ **图片Alt** - 所有图片包含描述
- ✅ **内部链接** - 良好的页面结构

提示: 请将 `index.html` 中的 `<link rel="canonical">` 和 Open Graph/Twitter 中的域名替换为你的真实域名；运行时也会自动根据当前域名/路径生成 `canonical` 和 `hreflang`。

## 🔧 自定义配置 / Customization

### 颜色主题
```css
:root {
    --primary-color: #007AFF;    /* 主色调 */
    --secondary-color: #34C759;  /* 辅助色 */
    /* 可自定义更多颜色变量 */
}
```

### 添加新语言
```javascript
// i18n.js 中添加
messages: {
    // 现有语言...
    'new-lang': {
        title: 'New Language Title',
        // 其他翻译...
    }
}
```

### 广告配置
```html
<!-- 替换为您的AdSense发布商ID -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"></script>
```

## 🔄 开发路线图 / Development Roadmap

### v1.1 计划功能
- [ ] 签名模板库
- [ ] 批量导出功能
- [ ] 更多画笔样式
- [ ] 用户偏好存储

### v1.2 计划功能
- [ ] PWA支持
- [ ] 离线使用
- [ ] 更多导出格式
- [ ] API接口开放

## 📄 许可证 / License

MIT License - 允许商业使用和修改

## 🤝 贡献 / Contributing

欢迎提交Issues和Pull Requests来改进项目！

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📞 支持 / Support

- **文档**: 查看README和DEPLOYMENT指南
- **Issues**: 在GitHub提交问题和建议
- **功能请求**: 通过Issues提交新功能建议

---

**⭐ 如果这个项目对你有帮助，请给个Star支持！**

**⭐ If this project helps you, please give it a Star!**
