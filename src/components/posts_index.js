import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from "../actions/fetch_posts";
import _ from 'lodash'
class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item'>
          {`${post.title} - ${post.content}`}
        </li>
      )
    })
  }
}

function mapStateToProps(state){
  return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
