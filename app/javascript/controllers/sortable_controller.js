import { Controller } from "@hotwired/stimulus"
import Sortable from 'sortablejs'
import { put } from '@rails/request.js'

// Connects to data-controller="sortable"
export default class extends Controller {
  static values = {
    group: String
  }
  connect() {
    // Sortable.create(this.element, {}) // 걍 이거 한줄 넣으니까 리스트 정렬 가능해짐!
    Sortable.create(this.element, {
      onEnd: this.onEnd.bind(this),
      // group: 'shared', //헐 이거 한방이 크네요!
      group: this.groupValue,
    })

  }

  onEnd(event){
    var sortableUpdateUrl = event.item.dataset.sortableUpdateUrl
    // console.log(event.newIndex)
    // console.log(event.item)
    // console.log(event.item.dataset.sortableId)
    // console.log(event.item.dataset.sortableUpdateUrl)
    // console.log(sortableUpdateUrl)
    // console.log(event.newIndex)

    var sortableListId = event.to.dataset.sortableListId
    // console.log(event.to)
    // console.log(event.to.dataset)
    // console.log(event.to.dataset.sortableListId)
    console.log(sortableListId)

    // put(`/lists/${event.item.dataset.sortableId}/sort`, {
    //   body: JSON.stringify({row_order_position: event.newIndex})
    // }) 
    //이게 뭘 의미하는지...
    // 뭔가 put action을 취하는데... row_order_position은 뭘까?

    put(sortableUpdateUrl, {
      // body: JSON.stringify({row_order_position: event.newIndex})
      body: JSON.stringify({row_order_position: event.newIndex, list_id: sortableListId})

    })
  }
}
