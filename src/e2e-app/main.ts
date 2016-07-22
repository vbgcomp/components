import {bootstrap} from '@angular/platform-browser-dynamic';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import {Renderer} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {MdLiveAnnouncer} from '@angular2-material/core/a11y/live-announcer';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {OverlayContainer} from '@angular2-material/core/overlay/overlay-container';
import {E2EApp} from './e2e-app/e2e-app';
import {E2E_APP_ROUTE_PROVIDER} from './e2e-app/routes';

bootstrap(E2EApp, [
  E2E_APP_ROUTE_PROVIDER,
  disableDeprecatedForms(),
  provideForms(),
  MdLiveAnnouncer,
  OverlayContainer,
  HTTP_PROVIDERS,
  MdIconRegistry,
  Renderer,
  {provide: HAMMER_GESTURE_CONFIG, useClass: MdGestureConfig},
]);
