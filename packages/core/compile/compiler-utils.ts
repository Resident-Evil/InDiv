import { IComponent, IDirective } from '../types';

import { InDiv, ElementRef } from '../indiv';
import { factoryCreator } from '../di';

/**
 * build scope for Components in Component
 *
 * @export
 * @param {Function} ComponentClass
 * @param {*} props
 * @param {Element} dom
 * @param {IComponent} componentInstance
 * @returns {IComponent}
 */
export function buildComponentScope(ComponentClass: Function, props: any, dom: Element, componentInstance: IComponent): IComponent {
  const provideAndInstanceMap = new Map();
  if (provideAndInstanceMap) provideAndInstanceMap.set(InDiv, componentInstance.$indivInstance);
  provideAndInstanceMap.set(ElementRef, new ElementRef(dom));

  const _component: IComponent = factoryCreator(ComponentClass, componentInstance.otherInjector, provideAndInstanceMap);

  // todo remove props
  console.log(3333333, _component, _component.inputPropsMap);
  for (const key in props) {
   if (_component.inputPropsMap && _component.inputPropsMap.has(key)) (_component as any)[_component.inputPropsMap.get(key)] = props[key];
  }
  // todo delete
  _component.props = props;
  _component.nativeElement = dom;

  componentInstance.declarationMap.forEach((declaration, key) => {
    if (!_component.declarationMap.has(key)) _component.declarationMap.set(key, declaration);
  });

  // bind compile for @Component
  _component.otherInjector = componentInstance.otherInjector;

  return _component;
}

/**
 * build scope for Directives in Directive
 *
 * @export
 * @param {Function} DirectiveClass
 * @param {*} props
 * @param {Element} dom
 * @param {IComponent} componentInstance
 * @returns {IComponent}
 */
export function buildDirectiveScope(DirectiveClass: Function, props: any, dom: Element, componentInstance: IComponent): IComponent {
  const provideAndInstanceMap = new Map();
  if (componentInstance.$indivInstance) provideAndInstanceMap.set(InDiv, componentInstance.$indivInstance);
  provideAndInstanceMap.set(ElementRef, new ElementRef(dom));

  const _directive: IDirective = factoryCreator(DirectiveClass, componentInstance.otherInjector, provideAndInstanceMap);

  _directive.props = props;
  _directive.nativeElement = dom;

  componentInstance.declarationMap.forEach((declaration, key) => {
    if (!_directive.declarationMap.has(key)) _directive.declarationMap.set(key, declaration);
  });

  _directive.otherInjector = componentInstance.otherInjector;

  return _directive;
}
