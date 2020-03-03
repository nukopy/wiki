---
title: "HTML"
metaTitle: "HTML | Languages - others"
metaDescription: "HTML tips"
---

HTML tips.

## iframe で Youtube を埋め込む方法

- [stackoverflow: embed youtube video - Refused to display in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN' [duplicate]](https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti)
- [stackoverflow: Unable to play YouTube videos on embed](https://stackoverflow.com/questions/51346055/unable-to-play-youtube-videos-on-embed/51346168)

Youtube の動画リンクを以下のように書き換える．

- `watch?v=[video-id]` を
- `embed/[video-id]` に書き変える

```html
- <iframe src="https://www.youtube.com/watch?v=-NoHOI35TyY"></iframe>
<!-- 書き換え後 -->
+ <iframe src="https://www.youtube.com/embed/-NoHOI35TyY"></iframe>
```

- 注意点
  - `watch~~~` のままだと `www.youtube.com refused to connect` というエラーが出て表示されない．また，
  - `embed?v=[video-id]` のように `watch` のみを修正するだけだと，埋め込みはできるが埋め込み後に再生できないという状態になる．
