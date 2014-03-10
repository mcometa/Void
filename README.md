# Void Bootstrap

A starter boilerplate app template for [Meteor](http://meteor.com) using [IronRouter](https://github.com/EventedMind/iron-router) and [Bootstrap 3](http://getbootstrap).

Void Boostrap is based on the original [Void](http://github.com/SachaG/Void) Meteor boilerplate, [Telescope](http://telesc.pe) (an open-source social news app) and is bought to you by the [Discover Meteor](https://www.discovermeteor.com) team.

I also merged cool stuff from [Justin Foley](https://github.com/jfols)'s version.

## Installation

If you already have Meteor and [Meteorite](https://github.com/oortcloud/meteorite/), Void is ready to go. Just clone it locally, run it with `mrt`, and start coding!

If not, here are the full instructions:

```
curl https://install.meteor.com | /bin/sh
npm install -g meteorite
git clone https://github.com/SachaG/Void.git myApp
cd myApp
mrt
```

## Features

- Client-side routing
- Publications/subscriptions
- Basic permissions
- Common templates
- Bootstrap 3 Theme, Components and JavaScript Plugins

From Justin Folley's repo:
- [autoform](http://github.com/aldeed/meteor-autoform), [collection2](http://github.com/aldeed/meteor-collection2) and [simple-schema](https://github.com/aldeed/meteor-simple-schema) combo.
- Basic CRUD.


## Principles

Void adopts a modular approach, where code is broken down in different files rather than all kept in one place. It also uses the “template/mapper” pattern, where the `item.html` template has a similarly named `item.js` JavaScript file that holds its helper code.

Void uses the `Items` collection as an example, but you would probably replace this with your own collection name (`Posts`, `Sales`, `Projects`, etc.) and change the file and variables names accordingly. 

## File Structure

```
.
├── client
│   ├── helpers
│   │   ├── account.js
│   │   ├── handlebars.js
│   │   ├── messages.js
│   │   └── router.js
│   ├── main.html
│   ├── main.js
│   ├── stylesheets
│   │   └── app.less
│   └── views
│       ├── common
│       │   ├── alerts.html
│       │   ├── alerts.js
│       │   ├── footer.html
│       │   ├── header.html
│       │   ├── header.js
│       │   ├── layout.html
│       │   ├── loading.html
│       │   ├── messages.html
│       │   └── notFound.html
│       ├── items
│       │   ├── item_create.html
│       │   ├── item_create.js
│       │   ├── item.html
│       │   ├── item.js
│       │   ├── items.html
│       │   └── items.js
│       ├── pages
│       │   ├── content.html
│       │   └── homepage.html
│       └── users
│           ├── forgot.html
│           ├── forgot.js
│           ├── login.html
│           └── signup.html
├── History.md
├── lib
│   ├── helpers.js
│   └── permissions.js
├── models
│   └── items.js
├── packages
│   ├── accounts-ui-bootstrap-3
│   ├── autoform
│   ├── bootstrap3-less
│   ├── collection2
│   ├── iron-router
│   ├── iron-router-progress
│   ├── moment
│   ├── sample-package
│   │   ├── package.js
│   │   └── sample.js
│   └── simple-schema
├── public
│   ├── fonts
│   └── images
│       └── void.jpg
├── README.md
├── server
│   ├── publications.js
│   └── seed.js
├── smart.json
└── smart.lock
```

## Other Boilerplates

- [meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate) by matteodem
- [meteor-jw-opinionated-skeleton](https://github.com/jamesdwilson/meteor-jw-opinionated-skeleton) by jamesdwilson (CoffeeScript)
- [meteor-boilerplate](https://github.com/BeDifferential/meteor-boilerplate) by BeDifferential (CoffeeScript)
