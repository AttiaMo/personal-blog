---
title: "How To Prepare Your App For iOS 13"
date: "2019-09-15"
categories: 
  - "ios"
  - "ios-13"
  - "tech"
tags: 
  - "ios13"
---

## Release dates 📆

Apple’s **iOS 13 release date** is September 19 and will be followed up with **iOS 13.1** on Monday, **September 30.**

But, **Xcode 11 GM** seed version is [available](https://developer.apple.com/download/) now and has all new device simulators.

### How to get ready for this?

<iframe src="https://giphy.com/embed/2uIlaHVsql55CLP3as" width="480" height="270" frameborder="0" class="giphy-embed" allowfullscreen></iframe>

## 1- First, how does your app look?

You need to build your app with Xcode 11 then hand it off to your **QC team** to start testing because you might find more specific issues in your project design and resources.

## 2- Update Your Dependencies

Then, you need to **check your dependency changelog and releases,** some SDKs and tools have a new version to support iOS 13, that includes fixing issues and supporting new stuff.

## 3- Dark Mode

![](/images/1*Ob-99a3DBsntYzjYskKUjg.jpeg)

apple.com

> You need to decide if your app going to support **Dark Mode, or not.**

If you want to support it (take care it needs more time than you think 😄), you will find [here](https://developer.apple.com/videos/wwdc2019/?q=dark%20mode) great WWDC sessions to help you do this step by step.

#### If Not, You Can Force One Appearance On Your App 🤷‍♀️ 🤷🏻‍♂️

If you wish to avoid adopting **Dark mode** in your app, drop the “light mode” indefinitely in favor of dark mode, or simply postpone your dark mode adoption to another time, add a new key `UIUserInterfaceStyle` in your app `info.plist` and set its value to `Light` or `Dark`.

> Or keep shipping your app with Xcode 10 😆

![](/images/1*8e1gihvqLZBWP7GrJr15og.png)

info.plist

## 3- Controls And Bars

![](/images/1*500TlMQnap4WVUlGGynlvA.png)

Apple.com

**The components have been refined 🎨**, especially for the segmented controls. Using native components is suggested. same for UISteppers, people are complaining about behavior changes [here](https://forums.developer.apple.com/thread/121495)(tint colors, value automatic updates, etc.)

## 4- Modal presentation

![](/images/1*f5htMS2NonZ-EWQHW_W9vA.png)

apple.com

> “Modality is a design technique that presents content in a temporary mode that’s separate from the user’s previous current context and requires an explicit action to exit.”

If you rely on having a **modal not being dismissed** (i.e: only dismiss the modal after the user chooses his country), on iOS 13, **by default the user can just swipe the modal down to dismiss it,** check out this [video](https://twitter.com/fcbunn/status/1136725792619147264?lang=en).

You can disable this set `isModalInpresentation = true`, you can update it throughout the lifecycle, [Apple Documentation📝.](https://developer.apple.com/documentation/uikit/view_controllers/disabling_pulling_down_a_sheet?changes=latest_minor)

The other option is to force the **full-screen presentation** style which is also usual on iOS 12 or lower `modalPresentationStyle = .fullScreen`

## 5- SF Symbols

![](/images/1*ci-zWVnULeoyuX4mSIKd0g.png)

WWDC.com

> SF Symbols provides a set of over 1,500 consistent, highly configurable symbols you can use in your app. Apple designed SF Symbols to integrate seamlessly with the San Francisco system font, so the symbols automatically ensure optical vertical alignment with text for all weights and sizes. SF Symbols are available in a wide range of weights and scales to help you create adaptable designs.you can download the SF symbols app from [here](https://developer.apple.com/design/downloads/SF-Symbols.dmg).

You can use them in UIImage like this:

```
UIImage(systemName: "star.fill")
```

> For me, I needed to **check the images and buttons images** especially system icons.

🎯After all of this, I think your app will be ready to work fine with iOS 13 new features and updates 🚀

But there’s always more to be done, such as supporting the new dynamic colors. Learn more in this WWDC \[[session](https://developer.apple.com/videos/play/wwdc2019/224/)\] 

#### If you liked this article feel free to share it with others who you think they should read it.
