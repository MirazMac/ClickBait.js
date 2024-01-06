# ClickBait.js
Embed random clickbait articles on your website as placeholders or simply for fun and giggles idk.

![min](https://github.com/MirazMac/ClickBait.js/assets/13865787/878f4be4-0ad9-40f9-af0d-25cc2e39d497)


## Setup

Include the script to your webpage.

```html
<script src="https://cdn.jsdelivr.net/gh/MirazMac/ClickBait.js@main/dist/ClickBait.min.js" type="application/javascript"></script>
```

### Usage
Now simply add the `data-bait-slot` attribute to any element. And a responsive ClickBait article will show up there.

```html
<div data-bait-slot></div>
```

If you want the ad to have column layout by default use it like this:

```html
<div data-bait-slot="column"></div>
```

If you want to change the target of the ad link, use the `data-bait-href` attribute. By default it points to rickroll.



```html
<div data-bait-slot data-bait-href="https://google.com"></div>
```
