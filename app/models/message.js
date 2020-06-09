import Model, { attr } from '@ember-data/model';

export default class MessageModel extends Model {
  @attr subject;
  @attr body;
  @attr('date') sentAt;
  @attr sender;
}
