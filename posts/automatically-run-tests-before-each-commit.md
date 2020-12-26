---
title: "Automatically Run Tests Before each Commit"
date: "2020-06-20"
categories: 
  - "ios"
  - "small"
  - "tech"
  - "tip"
---

Personally sometimes forgot to run tests before push my code, then the tests will fail in the CI, So I have to fix them locally then push and wait for our CI to run and see if it's succeeding or not. (this took _some time and maybe blocking the CI pipeline with no result)_, so I decided to **avoid the human error** by run tests automatically before each commit using **git hooks**

![](https://media.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif)

#### What's [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)?

_"Like many other Version Control Systems, Git has a way to fire off custom scripts when certain important actions occur. There are two groups of these hooks: client-side and server-side. Client-side hooks are triggered by operations such as committing and merging, while server-side hooks run on network operations such as receiving pushed commits. You can use these hooks for all sorts of reasons."_

#### Pre-commit Hook:

![](/images/Screen-Shot-2020-06-20-at-5.51.18-PM.png)

[https://git-scm.com/](https://git-scm.com/)

#### How to do that?

- Find your pre-commit file usually, it's in _**.git>hooks>pre-commit**_
- Open this file using your favorite text editor.
- Add this snippet to the file and replace _MyAwesomeApp_ with your name.

xcodebuild \\
  -workspace MyAwesomeApp.xcworkspace \\
  -scheme MyAwesomeApp \\
  -sdk iphonesimulator \\
  -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=13.5' \\
  test | xcpretty --test --color

#### Give it a try:

- Just a normal commit to your project and it will start running the tests and you'll get something like that.

![](/images/Screen-Shot-2020-06-20-at-6.03.39-PM.png)

Output.

#### Resource:

- [https://git-scm.com/](https://git-scm.com/)
- [https://www.mokacoding.com/blog/running-tests-from-the-terminal/](https://www.mokacoding.com/blog/running-tests-from-the-terminal/)

This is a really tiny tip to enhance your workflow but this git hook is very powerful, you do a lot with it like linting, your custom scripts ...etc  
Please leave a comment with your favorite git hooks if you have one 😊
