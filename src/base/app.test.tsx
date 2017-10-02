import * as React from 'react';
import App from './app';
import {About} from './app';
import { shallow } from 'enzyme';
import * as ReactRouterDom from 'react-router-dom';

const { HashRouter, Route, Switch } = ReactRouterDom;

let wrapper: any;
let hashRouter: any;
let hashRouterSwitch: any;
let routes: any;
let rootRoute: any;
let aboutRoute: any;

beforeEach(() => {
    wrapper = shallow(<App />);
    hashRouter = wrapper.find(HashRouter);
    hashRouterSwitch = wrapper.find(Switch);
    routes = hashRouterSwitch.find(Route);
    rootRoute = routes.filterWhere((n: any) => {
      return n.props().path === '/'
    });
    aboutRoute = routes.filterWhere((n: any) => {
      return n.props().path.indexOf('/about/:name') > -1
    });
});

test('Should render the index', () => {
  expect(wrapper.children.length).toEqual(1);
});

test('Should render the HashRouter', () => {  
  expect(hashRouter.length).toBe(1);
});

test('Should exclusively switch', () => {  
  expect(hashRouterSwitch.length).toBe(1);
});

test('Should render routes', () => {
  expect(routes.length).toBeGreaterThanOrEqual(1)
});

test('Should have a / route', () => {
  expect(rootRoute.length).toBe(1);
  expect(rootRoute.props().render).toBeTruthy();
  expect(rootRoute.props().component).toBeFalsy();
});

test('Should have an about/:name route', () => {
  expect(aboutRoute.length).toBe(1);
  expect(aboutRoute.props().component === About).toBeTruthy();
});