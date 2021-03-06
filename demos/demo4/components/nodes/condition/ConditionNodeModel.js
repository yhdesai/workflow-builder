import _ from 'lodash';
import * as RJD from '../../../../../src/main';
//import { ConditionPortModel } from './ConditionPortModel';

export class ConditionNodeModel extends RJD.NodeModel {
  constructor(name = 'Untitled', color = 'rgb(224, 98, 20)') {
    super('condition');
    this.addPort(new RJD.DefaultPortModel(false, 'output1', 'Yes'));
    this.addPort(new RJD.DefaultPortModel(false, 'output2', 'No'));
    this.addPort(new RJD.DefaultPortModel(true, 'input', 'In'));
    this.name = name;
    this.color = color;
  }

  deSerialize(object) {
    super.deSerialize(object);
    this.name = object.name;
    this.color = object.color;
  }

  serialize() {
    return _.merge(super.serialize(), {
      name: this.name,
      color: this.color,
    });
  }

  getInPort() {
    return this.ports.input;
  }

  getOutPort(portNumber) {
    return this.ports[`output${portNumber}`];
  }
}
