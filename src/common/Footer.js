import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
    <div>
      <div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u>
            <Link to="#">© Your Company</Link>
            </u></p>
					<p class="h6">&copy All right Reversed.<Link class="text-green ml-2" to="https://www.invictus.io" target="_blank">Invictus</Link></p>
				</div>
				<hr/>
			</div>
    </div>
    );
  }
}

export default (Footer);
// export default withStyles(s)(Footer);