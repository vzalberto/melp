import { action, computed, observable, runInAction } from 'mobx';

class MelpStore {
	@observable loadingState = '';
	@observable.shallow results = [];
	@observable totalCount = 0;
	@observable filteredByRadius = false;

	// @observable sortingStates = {
	// 	"sortBy": false,
	// 	"abcOrder": false,
	// 	"ratingOrder": false,
	// };

	// // One action to rule them all and in the darkness, bind them

	// @action.bound
	// toggleSort(key) {
	// 	this.sortingStates[key] = !this.sortingStates[key]
	// });

	// // These should be computed properties
	// @observable radiusToFilterBy = 0;
	// @observable avgRating = 0;
	// @observable stdDev = 0;
}

export const store = new MelpStore();