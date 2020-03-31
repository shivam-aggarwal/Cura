import React,{Component}from "react";
import axios from 'axios';

import "./Profile.css";
var store = require('store');


class Profile extends Component{

	constructor(props){
        super(props);
        this.state = {
            name: '',
            items: [{name: '', ingridients: []}],
            analysis_history: []
        }
    }
	
	componentDidMount(){
		var idt = {
			id: store.get('id')
		}
		var id = store.get('id');
		//console.log(config);
		axios.get('https://cura-3fb51.firebaseio.com/PROFILE%20DETAILS'+id).then(res => {
			console.log(res.data.data);
			this.setState({name: res.data.data.name});
			this.setState({items: res.data.data.items});
			this.setState({analysis_history: res.data.data.hist}) || null;

		}).catch(err => {
			console.log(err);
		});
	}
	
	render(){
		return(
            <div className="container">

            </div>
		);
    }
  
}

export default Profile;