# IIP Commons Embed Plugin

## Description

This plugin converts the HTML embed code from the IIP [Content Commons](https://commons.america.gov/) into a shortcode that can be embedded on a WordPress sites. This overcomes the issue wherein some editors or authors may not have access to add script tags to pages/posts due to security concerns.

The plugin creates a shortcode that WordPress can use to load the embedded content. It also adds the following metabox to the posts and pages admin panel:

![Screenshot of Metabox](/docs/images/metabox-screenshot.png)

To convert a Commons embed snippet, simply paste it into the left-hand box, click the `Convert Embed Code` button, and copy the resulting shortcode in the right-hand box. This shortcode can be pasted into any post or page on the site and will load the embed therein.

Currently supported Commons content types:
- Articles

For developer information please see the full [plugin documentation](https://iip-design.github.io/iip-commons-embed/).