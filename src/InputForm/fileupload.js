import React, { Component } from 'react';

export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);

        this.state = {
            imgCollection: ''
        }
    }

    onFileChange(e) {
        console.log(e.target.files);
        this.setState({ imgCollection: e.target.files });
        console.log(Object(this.state.imgCollection));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <h3>Choose your photos and certificate documents.</h3>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} multiple/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}