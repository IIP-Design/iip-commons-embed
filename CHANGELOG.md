# Change Log
##### All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.0.2

**Changed**

- Consolidated individual regex functions getting each parameter into one generic function

**Fixed**

- Load admin scripts only when editing a post or page
- Lauch hot module reloading only when in development

**Security**

- Update webpack-dev-server dependency to address potential security vulnerability in the package

## Initial Release - 0.0.1

**Features Added:**

- Creates a WordPress shortcode class to enable users to embed content from the [IIP Content Commons](https://commons.america.gov/).
- Adds a metabox to post and page backend allowing users to convert a Commons embed code into a WordPress shortcode.