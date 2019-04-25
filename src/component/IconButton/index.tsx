import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import styles from 'assets/jss/main';

jss.setup(preset());

const sheet = jss.createStyleSheet(styles);