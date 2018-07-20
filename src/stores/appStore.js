import { observable, action } from 'mobx';

class AppStore {
	@observable number = 0;

	@action increment = () => {
		this.number += 1;
	};

	@action decrement = () => {
		this.number -= 1;
	};
}

export default new AppStore();