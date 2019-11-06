import React, {Component} from 'react';
import  { cn } from '@bem-react/classname';

const cnOptimized = cn('Optimized');

// export const Optimized: React.FC = props =>
//   <div> {props.children} </div>
export default class Optimized extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return <div> {this.props.children} </div>
  }
}
