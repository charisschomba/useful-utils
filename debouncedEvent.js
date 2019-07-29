//To be used with react
import { debounce } from 'lodash';

const debounceEvent = (...args) => {
    this.debouncedEvent = debounce(...args);
    return(e) => {
        e.persist();
        return this.debouncedEvent(e);
    };
}
export default debounceEvent;


//<Input
//    onChange={this.debounceEvent(this.handleSearch, 1000)}
//    className="search-input"
//    autoFocus
//    placeholder="email or firstname"
///>