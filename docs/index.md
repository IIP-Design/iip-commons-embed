# IIP Commons Embed Documentation

## Development

This plugin is broken into three components, namely the `includes`, `public`, and `admin` directories. The includes directory contains a loader to register all the plugin's hooks and creates an IIP_Common_Embed class to initiate the plugin. The public directory creates and registers WordPress shortcodes for each content type. The admin directory creates a custom metabox that converts the Commons embed snippets into Wordpress shortcodes. 

### Custom Metabox
The custom metabox loads a small React app into the WordPress backend. This app is located in the directory `admin/js/src`. This directory includes a test page with hot module reload to simplify development and testing of the metabox app. To run this test app, run `npm install` from the `admin/js` directory (to install the required dependencies) and `npm run start` (to start the development server). This will start up a test page on your localhost on port 8080. Note that much of the metabox styling depends on the standard WordPress stylesheet and will therefore not be present in the test page. To create a production build of the app run the command `npm run build`.

## Shortcode Parameters

The plugin creates a shortcode class for each content type that is embeddable from the Content Commons. The shortcode will begin with `commons-[content-type]` and accept the parameters required to load each content type. See below for the specific shortcode attributes for each content type:

### Article

The single article shortcode is identified by `commons-article` and takes the following parameters:

| Parameter  | Accepted Value & Type    | Description                   |
|------------|--------------------------|-------------------------------|
| post_id    | source post id - string  | ID of source post             |
| post_site  | post site - string       | URL of source site            |
| loader_url | URL loader file - string | S3 bucket URL for loader file |

Error handling:
- If the post id is invalid the site will display the error message `Sorry, it looks like this content is currently unavailable.`
- If the site is invalid the site will display the error message `Sorry, it looks like this content is currently unavailable.`
- If the loader URL is invalid the shortcode will not load anything and it will appear as whitespace on the page.