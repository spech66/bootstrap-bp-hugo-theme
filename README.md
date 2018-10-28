# bootstrap-best-practices-hugo-theme

Bootstrap based Hugo theme which provides out of the box best practices.

## Google Analytics

This theme uses the internal asynchronous template for Google Analytics tracking. You only have to provide your tracking id in your configuration file:

```yaml
googleAnalytics = "UA-123-45"
```

## Images and Open Graph

This theme uses Hugos `images` array to set the optimized feature image. You can use the array to provide content images as well.

```yaml

```

From the Docu of Open Graph:
> Hugo uses the page title and description for the title and description metadata. The first 6 URLs from the images array are used for image metadata.
> Various optional metadata can also be set: - Date, published date, and last modified data are used to set the published time metadata if specified.
> \- audio and video are URL arrays like images for the audio and video metadata tags, respectively. - The first 6 tags on the page are used for the tags metadata. - The series taxonomy is used to specify related “see also” pages by placing them in the same series.