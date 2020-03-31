import React, {Component} from 'react';
import axios from 'axios';
import './food.css';
import Navbar from './navbar/Navbar';
import {VictoryPie, VictoryBar} from 'victory';
import firebase from './../../firebase';
import store from 'store';

class Food extends Component{

    constructor(props){
        super(props);

        this.state = {
            food_item: '',
            food_ingridient_1: '',
            food_ingridient_2: '',
            bool: false,
            arr_plot: []
        }
    }
    
    handleFoodItemChange = (e) => {
        this.setState({food_item: e.target.value});
    }
    
    handleFoodIng1Change = (e) => {
        this.setState({food_ingridient_1: e.target.value});
    }

    handleFoodIng2Change = (e) => {
        this.setState({food_ingridient_2: e.target.value});
    }

    submitData = (e) => {
        e.preventDefault();
        var name = {
            food_item: this.state.food_item,
            food_ingridient: [this.state.food_ingridient_1, this.state.food_ingridient_2]
        }
        const itemsRef = firebase.database().ref('PROFILE DETAILS').child("rsrohan/food");
        itemsRef.once("value").then((snapshot) => {
            let count = snapshot.numChildren();
            console.log(count);
            itemsRef.child(count).update(name.food_ingridient);
        });
    
    }

    analyseData = (e) => {
        e.preventDefault();
        
        axios.post("food-allergey").then(res => {
            console.log(res.data);
            this.setState({bool: true});
            let items = res.data.data.items;
            let freq = res.data.data.freq;
            let arr_plot = [];
            for(let i=0;i<freq.length;i++){
                arr_plot.push({x: items[i], y: freq[i]});
            }
            this.setState({arr_plot: arr_plot});
            console.log("Yo");
        });
    
    }

    render(){

        return(
            <div>
        <Navbar></Navbar>
            <div className="main-section row container">
                <div className="col-6">
                    <div className="div-cust">
                        <h2>Add Food Item</h2>

                        <form className="container" method="post" onSubmit={this.submitData}>
                            <div className="form-group row">
                                <div className="col-sm-1">
                                    <label for="exampleInputEmail1" className="cust-lab">Item:</label>
                                </div>
                                <div className="col-sm-11">
                                    <input type="text" className="form-control cust-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Food Item" onChange={this.handleFoodItemChange}/>
                                </div>
                            </div>
                            <div className="form-group row ingri">
                                <div className="col-sm-2">
                                    <label for="exampleInputEmail1" className="cust-lab">Ingridients:</label>
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control cust-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter an ingridient" onChange={this.handleFoodIng1Change}/>
                                    <input type="text" className="form-control cust-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter an ingridient" onChange={this.handleFoodIng2Change}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="food-submit" value="Add Item" className="submit-cust" />
                            </div>
                            
                        </form>
                    </div>
                    <div className="row container analyse-div">
                        <div className="col-md-12">
                            <button type="button" class="btn btn-primary submit-cust" onClick={this.analyseData}>Analyse</button>
                            <p className="analyse-p">djkhgriue jewbfewf asgdvwyt wgvdetywf fegvfewtyf dhfipweouryt dgvfuewfveuw gggg hdcbcxmnbc jkwbedjf
                            djhfeiugfi dhuqoqw dnvbnlkc jefhueiwlkn dhbvsoiefh vjoriehgrbe fuhgrore</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="div-cust">
                        <h2>Analysis</h2>
                        <VictoryPie data={this.state.arr_plot} colorScale={["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"]} innerRadius={80}/>
                    </div>
                </div> 

                {/*<form method="post" onSubmit={this.analyseData}>
                    <input type="submit" name="food-submit" value="Analyze" id="group5"/>
                </form>*/}
                    
            </div>

        {/*
            this.state.bool && (<section className="demo">
            <img src={require('./../../graph.png')} />
        </section>
        )
        */}
        


  </div>
        );
    }
}

export default Food;