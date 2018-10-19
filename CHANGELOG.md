# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.5.4"></a>
## [1.5.4](https://github.com/teamgunio/slack-activity-feed/compare/v1.5.3...v1.5.4) (2018-10-19)


### Bug Fixes

* ignore message_changed events; better attachment handling; better error handling for user_not_found ([61f5858](https://github.com/teamgunio/slack-activity-feed/commit/61f5858))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/teamgunio/slack-activity-feed/compare/v1.5.2...v1.5.3) (2018-10-19)


### Bug Fixes

* drops express logging since it's so noisy with script kiddies hitting us ([a0de8c9](https://github.com/teamgunio/slack-activity-feed/commit/a0de8c9))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/teamgunio/slack-activity-feed/compare/v1.5.1...v1.5.2) (2018-10-19)


### Bug Fixes

* adds RTM error handler ([83cf9e1](https://github.com/teamgunio/slack-activity-feed/commit/83cf9e1))
* adds RTM handlers/logging for lifecycle events ([7854ba5](https://github.com/teamgunio/slack-activity-feed/commit/7854ba5))
* fixes issues with error RTM lifecycle handlers; adds ready state handler ([8e97011](https://github.com/teamgunio/slack-activity-feed/commit/8e97011))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/teamgunio/slack-activity-feed/compare/v1.5.0...v1.5.1) (2018-10-19)


### Bug Fixes

* adds bunyan for logging express requests and console statements with timestamps ([c822b97](https://github.com/teamgunio/slack-activity-feed/commit/c822b97))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/teamgunio/slack-activity-feed/compare/v1.4.0...v1.5.0) (2018-07-12)


### Features

* **ActivityFeed:** GCSAF-32 adds attachement coloring, pre_text, and fallback ([a0a91da](https://github.com/teamgunio/slack-activity-feed/commit/a0a91da))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/teamgunio/slack-activity-feed/compare/v1.3.3...v1.4.0) (2018-07-12)


### Features

* **ActivityFeed:** GCSAF-32 adds additional attachment info from bot events ([94d5249](https://github.com/teamgunio/slack-activity-feed/commit/94d5249))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/teamgunio/slack-activity-feed/compare/v1.3.2...v1.3.3) (2018-07-12)


### Bug Fixes

* **ActivityFeed:** GCSAF-32 pass the bot_id to the bot info lookup ([cd4d6e5](https://github.com/teamgunio/slack-activity-feed/commit/cd4d6e5))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/teamgunio/slack-activity-feed/compare/v1.3.1...v1.3.2) (2018-07-12)


### Bug Fixes

* improves version info of running env for easier debugging ([4edc916](https://github.com/teamgunio/slack-activity-feed/commit/4edc916))
* **ActivityFeed:** GCSAF-32 only check for message.bot_id to detect a bot ([d1a1e1f](https://github.com/teamgunio/slack-activity-feed/commit/d1a1e1f))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/teamgunio/slack-activity-feed/compare/v1.3.0...v1.3.1) (2018-07-12)


### Bug Fixes

* **ActivityFeed:** GCSAF-32 use message.bot_id as an way to identify if a message is from a bot ([cd30dda](https://github.com/teamgunio/slack-activity-feed/commit/cd30dda))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/teamgunio/slack-activity-feed/compare/v1.2.2...v1.3.0) (2018-07-12)


### Features

* **ActivityFeed:** GCSAF-32 introduces bot look ups and posts the attachment of a bot message; adds a fixture for a sample bot messages for tests ([d1bd335](https://github.com/teamgunio/slack-activity-feed/commit/d1bd335))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/teamgunio/slack-activity-feed/compare/v1.2.1...v1.2.2) (2018-07-12)


### Bug Fixes

* **ActivityFeed:** GCSAF-32 don't ignore bot messages, we'll ignore channel_leave instead ([b8bb432](https://github.com/teamgunio/slack-activity-feed/commit/b8bb432))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/teamgunio/slack-activity-feed/compare/v1.2.0...v1.2.1) (2018-07-12)


### Bug Fixes

* **AggregationCommand:** GCSAF-30 updates the aggregation command response to make a little more sense ([5a98db6](https://github.com/teamgunio/slack-activity-feed/commit/5a98db6))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/teamgunio/slack-activity-feed/compare/v1.1.0...v1.2.0) (2018-07-12)


### Features

* **HomePage:** A little friendlier go away message for the current home page ([0a49bdf](https://github.com/teamgunio/slack-activity-feed/commit/0a49bdf))



<a name="1.1.0"></a>
# 1.1.0 (2018-07-12)


### Features

* **Aggregate:** GCSAF-22 GCSAF-23 cleans up events listening and grabs channel from env config; allows overriding aggregation channel from command; republishes messages to aggregation channel as installer - not ideal ([2e8f929](https://github.com/teamgunio/slack-activity-feed/commit/2e8f929))
* **Events:** GCSAF-22 GCSAF-23 subscribe to events and re-publish to aggregated channel ([7884154](https://github.com/teamgunio/slack-activity-feed/commit/7884154))
* **Logging:** improves startup and activity logs while in early stages ([115c60e](https://github.com/teamgunio/slack-activity-feed/commit/115c60e))
* **MessageAggregator:** switches to Slack SDK and RTM API for listening to messages as a bot; posts as attachments so we can post as a user; gets user info for post formatting ([55e99c3](https://github.com/teamgunio/slack-activity-feed/commit/55e99c3))
