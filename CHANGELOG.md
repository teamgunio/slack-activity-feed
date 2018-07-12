# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
