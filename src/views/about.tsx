import React from 'react';
import { RouteComponentProps, match, Link } from 'react-router-dom';

interface AboutParams {
  name: string;
  value: string;
}

interface AboutProps extends RouteComponentProps<any> {
  match: match<AboutParams>;
}

export default ({ match }: AboutProps) => <div>hi, {match.params.name}
  <Link to="/">Index</Link>
</div>;
