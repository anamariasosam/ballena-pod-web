import React, {Component} from 'react';
import axios from 'axios';

class PodMembers extends Component {
	state = {
		members: [],
	}

	componentDidMount() {
		axios.get('https://ballena-pod-api.herokuapp.com/members.json')
			.then((response) => {
				this.setState({
					members: response.data,
				})
			})
	}

	render() {
		const { members } = this.state;
		return(
			<ul class="list pl0 mt0 measure center sans-serif">
				{
					members.map((member) => {
						return(
							<li
								class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
									<img class="br-100 pa1 ba b--black-10 h3 w3" src={member.avatar} alt={member.name}/>
									<div class="pl3 flex-auto">
										<span class="f5 db  b">{member.name}</span>
										<span class="f7 db dark-blue">{member.role}</span>
										<span class="f7 db black-70 i">{member.date_of_birth}</span>
									</div>
									<div>
									<div className="no-underline inline-flex items-center ma2 tc br2 pa2">
										<div className="dib mh3 tc">
											<img class="br-100 dib h2" src={member.corporate_value.avatar} alt={member.corporate_value.name}/>
											<span className="f7 db dark-grey">{member.corporate_value.name}</span>
										</div>
  								</div>
									</div>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

export default PodMembers;
