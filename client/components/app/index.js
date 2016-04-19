import React, {Component} from 'react';
import {} from './style.less';
 
class App extends Component {
  render() {
    return <article>
	<h1>{ this.props.title }</h1>
	<div>
		<img src={ this.props.featured } />
		<section>
			<div className="summary">{ this.props.summary }</div>
			<div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
		</section>
		<section className="author">
			<img src={ this.props.author.authorImageLink } />
			<div>{ this.props.author.authorName }</div>
			<div>{ this.props.author.authorRole }</div>
			<div>{ this.props.author.authorAbout }</div>
		</section>
	</div>
	</article>;
  }
}
 
export default App;
