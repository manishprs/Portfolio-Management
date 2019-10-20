import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
    <div>
      <div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u>
            <Link className="c-name" to="#">Copyright © 2019 | inviktus.io</Link>
            </u></p>
					<p className="h6">All Rights Reserved</p>
				</div>
				<hr/>
			</div>
    </div>
    );
  }
}

export default (Footer);