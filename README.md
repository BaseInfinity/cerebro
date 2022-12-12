oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cerebro
$ cerebro COMMAND
running command...
$ cerebro (--version)
cerebro/0.0.0 darwin-arm64 node-v19.0.1
$ cerebro --help [COMMAND]
USAGE
  $ cerebro COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cerebro hello PERSON`](#cerebro-hello-person)
* [`cerebro hello world`](#cerebro-hello-world)
* [`cerebro help [COMMAND]`](#cerebro-help-command)
* [`cerebro plugins`](#cerebro-plugins)
* [`cerebro plugins:install PLUGIN...`](#cerebro-pluginsinstall-plugin)
* [`cerebro plugins:inspect PLUGIN...`](#cerebro-pluginsinspect-plugin)
* [`cerebro plugins:install PLUGIN...`](#cerebro-pluginsinstall-plugin-1)
* [`cerebro plugins:link PLUGIN`](#cerebro-pluginslink-plugin)
* [`cerebro plugins:uninstall PLUGIN...`](#cerebro-pluginsuninstall-plugin)
* [`cerebro plugins:uninstall PLUGIN...`](#cerebro-pluginsuninstall-plugin-1)
* [`cerebro plugins:uninstall PLUGIN...`](#cerebro-pluginsuninstall-plugin-2)
* [`cerebro plugins update`](#cerebro-plugins-update)

## `cerebro hello PERSON`

Say hello

```
USAGE
  $ cerebro hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/baseinfinity/cerebro/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cerebro hello world`

Say hello world

```
USAGE
  $ cerebro hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cerebro hello world
  hello world! (./src/commands/hello/world.ts)
```

## `cerebro help [COMMAND]`

Display help for cerebro.

```
USAGE
  $ cerebro help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cerebro.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.18/src/commands/help.ts)_

## `cerebro plugins`

List installed plugins.

```
USAGE
  $ cerebro plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cerebro plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.6/src/commands/plugins/index.ts)_

## `cerebro plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cerebro plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cerebro plugins add

EXAMPLES
  $ cerebro plugins:install myplugin 

  $ cerebro plugins:install https://github.com/someuser/someplugin

  $ cerebro plugins:install someuser/someplugin
```

## `cerebro plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cerebro plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cerebro plugins:inspect myplugin
```

## `cerebro plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cerebro plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cerebro plugins add

EXAMPLES
  $ cerebro plugins:install myplugin 

  $ cerebro plugins:install https://github.com/someuser/someplugin

  $ cerebro plugins:install someuser/someplugin
```

## `cerebro plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cerebro plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cerebro plugins:link myplugin
```

## `cerebro plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cerebro plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cerebro plugins unlink
  $ cerebro plugins remove
```

## `cerebro plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cerebro plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cerebro plugins unlink
  $ cerebro plugins remove
```

## `cerebro plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cerebro plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cerebro plugins unlink
  $ cerebro plugins remove
```

## `cerebro plugins update`

Update installed plugins.

```
USAGE
  $ cerebro plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
