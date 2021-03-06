import React, { Component } from 'react';
// import {Route, Link} from 'react-router-dom'
import {  Route, Link } from 'react-router-dom';
// import PeopleComp from '../components/PeopleComp/PeopleComp.js';
// import UpdateComp from '../components/PeopleComp/UpdateComp.js';
import Home from '../components/Home.js';
import NavComp from '../components/NavComp/NavComp';
import Button from 'antd/lib/button';
import {Table, Divider} from 'antd';
import 'antd/dist/antd.css';


class PeerSearch extends Component {
  constructor(props){
    super(props);
    
    this.data = require('./data.json')[localStorage.user.split("\"")[3]];
    //this.data = JSON.stringify(this.data);
    console.log(this.data);
    
    if(this.data!=null){
    var jsontmp;
		    var tmp = [];
			for(var i = 0; i < this.data.length; i ++){
				jsontmp = {

                    key :0,
						id: this.data[i],
						

				}
				tmp.push(jsontmp);
			}
	this.data=tmp;
    }
    else{
        var jsontmp = {
            key:0,
            id: "Unfortunately no one matches your interest right now."
        }
        this.data = [];
        this.data.push(jsontmp);
    }
    
    this.state = {
        //current project
        columns: [{
            title:"ID",
            dataIndex: "id",
            key: "id",
            }
            ],
       dataSource: this.data,
            
    };

    
  }

  render() {
    return (
      <div>
      <head>
          <link rel="stylesheet" href="https://bootswatch.com/4/lumen/bootstrap.css" media="screen"></link>
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link> */}
      </head>

      <NavComp></NavComp>

      Hi, {localStorage.user.split("\"")[3]}.

      Peers that match your research interests most are: 
      <div class="container">
                <Table columns = {this.state.columns} dataSource = {this.state.dataSource} />
            </div>
      <br/>
      This PeerSearch system uses kMedoids clustering. Credit:
      Bauckhage C. Numpy/scipy Recipes for Data Science: k-Medoids Clustering[R].
      Technical Report, University of Bonn, 2015.
      </div>
    );
  }
}

export {PeerSearch};
