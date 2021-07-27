import { ISchema } from '@formily/react';
import { dateTimeProps, defaultProps } from './properties';

export const updatedAt: ISchema = {
  name: 'updatedAt',
  type: 'object',
  group: 'systemInfo',
  order: 2,
  title: '最后更新时间',
  default: {
    dataType: 'date',
    field: 'updated_at',
    // name,
    uiSchema: {
      type: 'datetime',
      title: '最后更新时间',
      'x-component': 'DatePicker',
      'x-component-props': {},
      'x-read-pretty': true,
      'x-decorator': 'FormItem',
      'x-designable-bar': 'DatePicker.DesignableBar',
    } as ISchema,
  },
  properties: {
    ...defaultProps,
    ...dateTimeProps,
  },
  operations: [
    { label: '等于', value: 'eq' },
    { label: '不等于', value: 'ne' },
  ],
};
