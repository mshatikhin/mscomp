/**
 * Created by mshat on 19.04.2016.
 */
'use strict';

import {Action} from '../actions/BlogActions';
import {Dispatcher} from 'flux';

const instance: Dispatcher<Action> = new Dispatcher();
export default instance;

export const dispatch = instance.dispatch.bind(instance);