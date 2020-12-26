---
title: "Custom fonts in iOS apps, Global settings and localizations"
date: "2017-12-20"
categories: 
  - "ios-tech"
  - "tech"
tags: 
  - "apple"
  - "fonts"
  - "ios"
  - "iphone"
---

![](/images/17719-1i_cpxyhwwrhh5slc5gx-la.png)

Apple has opted to use a new system font named “San Francisco” for iPhones, iPads, and Macs running **iOS 9** and OS X 10.11. And in **iOS 11** apple changes the _Arabic fonts_ and that was so bad by the way. So your client/ product or your brand maybe using a custom font to express their branding or something This tutorial is for **_applying the custom font to your iOS app_**, and set it a global appearance, and localize your font so you can use different fonts for different languages.

### Step 1: Include your fonts in your XCode project

Most commonly, you’ll have a TTF or OTF font that you’ll want to use with all of your UILabels or UITextViews in your app. Well, the first step is to include these fonts into your XCode project.

**Drag your .ttf or .otf from Finder into your Project**

![](/images/fb61b-1z54tpgzafaemmirtv6pxja.png)

Add your font files to the Xcode project

![](/images/4eec9-1nirof0mnbdmif9f61ie7vq.png)

_Make sure to check the box of your main application target_

### Step 2: Check that your fonts are included as Resources in your bundle

Go to your project Build Phases pane by highlighting the XCode project file in your solution explorer and on the right hand side, select “Build Phases”. You’ll see that one of the sections you can expand is “Copy Bundle Resources”. Open that list and make sure that your fonts are included in that list.

![](/images/e8f42-13mxeari9zohzjrna5w65za.png)

_Make sure that your fonts are in the “Copy Bundle Resources” list_

### Step 3: Include your iOS custom fonts in your Info.plist

The next thing to do is to modify your app’s plist to include these font faces. By default, your plist will be named as Info.plist and will reside in the “Supporting Files” folder if you haven’t moved it.

![](/images/16e16-1zcejagqaci5u3mbmwotwxw.png)

Open it and add a new row called “Fonts provided by application” which will be an array that you need to add all the filenames of the fonts you want to use. In my case, it was seven of the Quicksand fonts as you can see in the screenshot below. Be careful to include the extension and make sure that you don’t perform any typos here. That’s another common problem, as simple as it may seem.

> Make sure that you don’t perform any typos here. That’s another common problem

### Step 4: Get the name of the font

This is a common pitfall for many people trying to include custom fonts into their iOS app. This was something that eluded me before as well and it’s the fact that when you specify which font you want to use, you’re not specifying the file name but rather, the **font name**. The tricky part is that the font name may not be what you expect. It could be very different than any of the visible font names that you can see.

So in order to easily find the name of the font that you want to use, you can output something to the console window and see for yourself.

Add this snippet of code to log all the fonts available to your app in the console. Choose either the Swift or Objective-C snippet depending on which language your project uses.

**Swift:**

[https://gist.github.com/AttiaMo/3ce7504c4a8319c5c4cebd40230e3bd4](https://gist.github.com/AttiaMo/3ce7504c4a8319c5c4cebd40230e3bd4)

Once you run your app, you’ll get the list of fonts displayed in your console log. Then its just a matter of finding your custom font in the list and getting the font names.

![](/images/088a8-1fulf67aqde6caj8te67-zq.png)

Find your font name

**Remember to get rid of that code snippet after you find the font name that you need!**

_Or search for the font name in_ **_Font Book_** _App, but you should_ **_install_** _the font in your mac firstly but clicking in the file on finder._

![](/images/56017-1sf2a4vyt-k3piwd-sp4wig.png)

Font Book App

![](/images/ba115-1dvk0od7evqnmp3shj-ogaq.png)

Search for your font name

> The **PostScript name** is the name you should use in your code.

### Step 5: Use UIFont and specify the name of the font

> Now you can see your Custom font in the **_interface builder_**

![](/images/89989-1cc3mmmqzvxedw08wupbc5a.png)

Custom font in interface builder

> You can use it programmatically in your code like this : make extension of your **UIFont** and add your font.

[https://gist.github.com/AttiaMo/8e0489c38412008d2d2e6627099b1a17](https://gist.github.com/AttiaMo/8e0489c38412008d2d2e6627099b1a17)

**_Then_**

[https://gist.github.com/AttiaMo/0dcbeaa64e58ba4551e3d4aef88e2ff1](https://gist.github.com/AttiaMo/0dcbeaa64e58ba4551e3d4aef88e2ff1)

If your app is single language and you’re using the custom font in specific areas not the whole app, **So you’re finally done** 👏🏼

### Step 6: Font weight and point size

**But** your labels font maybe **different weights** maybe ( regular, bold and meduim ..etc ).

According to [**Sandy Champan’s Answer**](https://stackoverflow.com/questions/8707082/set-a-default-font-for-whole-ios-app) this the easiest way to do this

[https://gist.github.com/AttiaMo/1d6eedab4b3ea279f63b97d4f0f972ba](https://gist.github.com/AttiaMo/1d6eedab4b3ea279f63b97d4f0f972ba)

### Step 7: Use UIFont for the whole app

**But** if you want to make your custom more global for example, you want to make all labels with special font **“HelveticaNeueW23foSKY-Bd”** without updating all the labels one by one in your app ❓.

You can simply do this By setting global appearance of **UILabel** in while launching your app.

> Add this method to your **AppDelegate** file, and **call** it in “_didFinishLaunchingWithOptions_”.

[https://gist.github.com/AttiaMo/b71d9cd71806e12797f5d9f676985499](https://gist.github.com/AttiaMo/b71d9cd71806e12797f5d9f676985499)

### Step 8: Use different fonts in different languages “localize your fonts”:

It’s super easy to do this just localize the name of your font with in your \***Localizable.strings**\* File

![](/images/45472-1xy-szg2p5hig1euslqnx3q.png)

![](/images/2d983-1xc-w0pcc8s9qhkqczc3w2g.png)

Here’s the simple demo

\[embed\]https://github.com/AttiaMo/CustomFontsDemo\[/embed\]
