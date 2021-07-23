import { ISchema } from '@formily/react';
import { defaultProps, dataSource } from './properties';

export const select: ISchema = {
  name: 'select',
  type: 'object',
  group: 'choices',
  order: 2,
  title: '下拉选择（单选）',
  default: {
    dataType: 'string',
    // name,
    uiSchema: {
      type: 'string',
      // title,
      'x-component': 'Select',
      'x-decorator': 'FormItem',
      'x-designable-bar': 'Select.DesignableBar',
      enum: [],
    } as ISchema,
  },
  properties: {
    ...defaultProps,
    'uiSchema.enum': dataSource,
  },
  operations: [
    { label: '等于', value: 'eq' },
    { label: '不等于', value: 'ne' },
  ],
};