import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';

import { ModalConfig } from './modal-config';
import { ModalComponent } from './modal.component';
import { BodyInjectorService } from '../../services/body-injector.service';

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {
  }

  close(): void {
    this.componentRef.destroy();
  }
}

@Injectable()
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private bodyInjector: BodyInjectorService) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
