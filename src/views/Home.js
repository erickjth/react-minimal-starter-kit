import React from 'react';
import { connect } from 'react-redux';
import PageWrapper from 'components/layout/PageWrapper';

class Home extends React.Component {

	render() {
		return (
			<PageWrapper>
				<div className="row">
					<div className="col-md-8 mx-auto col-xs-12">
						Looks like the box is ready to code!!!!!!
					</div>
				</div>
			</PageWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
