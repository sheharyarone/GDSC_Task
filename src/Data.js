import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://www.yelp.com/biz/lolinda-san-francisco';
const Token = 'PDwkkLWro7REKkoxUxWrQpm7dFxrTb28G3ZAgXRTm99BZRHWTAxTuIK_T6gy8ImOE0_OsiAYC1n8Tlzi7FHtWRXSyPNBvQh4-bJyDMAg7JPHLbavN6Hza0ie2OlTY3Yx';
const locationSearched = 'NEW YORK';
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            render: false
        };

    }
    async componentDidMount() {


        let response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
            headers: {
                Authorization: `Bearer ${Token}`,
                Accept: 'application/json'
            },
            params: {
                categories: 'breakfast_brunch',
            }
        })
            .then((res) => {
                this.setState({
                    data: res.data,
                    render: true
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        if (this.state.render) {
            return (
                <div>
                    
                        {this.state.data.businesses.map((bussiness) =>
                            <div>
                                <h2>{bussiness.name}</h2>
                                <h3>Rating : {bussiness.rating}</h3>
                                <h3>Contact : {bussiness.phone}</h3>

                            </div>
                        )}
                </div>

            )
        }
        else {
            return (
                <div>
                    <h1>LOADING ... </h1>
                </div>

            )
        }
    }
}
export default Data;