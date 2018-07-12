# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
