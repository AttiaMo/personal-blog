---
title: "New iPhones support"
date: "2018-10-09"
categories: 
  - "ios-tech"
  - "tech"
tags: 
  - "ios"
  - "iphone"
  - "iphone-xs"
  - "swift"
  - "xcode"
---

![](/images/22e3f-1jz-np5fcwjok7wwdal01tw.png)

**Last September**, Apple announced the iPhone XS, iPhone XS Max and iPhone XR. These three new iPhones for 2018 officially replace the iPhone X, which Apple pulled from its store after the announcement. So you should make sure **that your app adapt the 3 new devices screens**.

I will write small tips to refactor your code from only iPhone X support to support all the notch devices 😉 (iPhone XS, iPhone XS Max and iPhone XR)

### But first what’s the difference:

> Here’s a comparison between the devices screens in different ways, from [PaintCodeApp](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)

![](/images/7f225-1fgsh7tcimnekszfmlyzxgg.png)

Points and pixels difference

![](/images/f7d28-19rhdaa4yjlevafw7xpxapa.png)

Physical size

### How to code it?

For me i have a func called **isIPhoneX()** it returns true when it’s an iPhone X screen so i can update my constraint and commit to **Safe area insets.**

An easy way to embrace the notch in all the app is refactor this func to find out the new iPhones also.

### First:

Renaming it to hasNotch() or whatever easy to read for you that is not only iPhone X now

![](/images/fac7b-1eivkz0wrngirqxp0g9dtow.png)

You should have func like this to Adapt for iPhone X

![](/images/33e1a-1el8os32u7z-nnauv2njf7q.png)

It should be renamed now to make more sense

### Second:

Update the func body to one of the following implementation

[https://gist.github.com/AttiaMo/9ec7d88c0cf7841dcf096924bff33f38.js](https://gist.github.com/AttiaMo/9ec7d88c0cf7841dcf096924bff33f38.js)[https://gist.github.com/AttiaMo/1d3b5cd23311b7a3f3c717cfa85d8f9a.js](https://gist.github.com/AttiaMo/1d3b5cd23311b7a3f3c717cfa85d8f9a.js)

You can find more information about the screen sizes and bars  in [PaincodeApp](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions) and in [iOS Design](https://kapeli.com/cheat_sheets/iOS_Design.docset/Contents/Resources/Documents/index)
