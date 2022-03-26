import React, { Component } from 'react'

class FoodBox extends Component {

    render() {
        return (
            <div>
                {this.props.foods.map(({ name, calories, image, quantity }, index) => {
                    return (
                        <div key={index} className="box">
                            <article className="media">
                                <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={image} />
                                </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                        <strong>{name}</strong> <br />
                                        <small>{calories} cal</small>
                                        </p>
                                    </div>
                                    </div>
                                    <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                        <input className="input" type="number" /> {/* value= */}
                                        </div>
                                        <div className="control">
                                        <button className="button is-info">
                                            +
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FoodBox