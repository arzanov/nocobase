---
nav:
  path: /client
group:
  path: /client
---

# SchemaComponent

## Components

### SchemaComponentProvider

```tsx | pure
<SchemaComponentProvider>
  <SchemaComponent schema={{}}/>
</SchemaComponentProvider>
```

### SchemaComponentOptions

提供 SchemaComponent 所需的 scope 和 components，可以嵌套，当 `inherit={true}` 时，继承父级的 scope 和 components。

```tsx | pure
<SchemaComponentOptions scope={{}} components={{}}>
</SchemaComponentOptions>

<SchemaComponentOptions scope={{}} components={{}}>
  {/* 继承父级的 scope 和 components */}
  <SchemaComponentOptions inherit scope={{}} components={{}}>
  </SchemaComponentOptions>
</SchemaComponentOptions>
```

例如将  useTranslation 的 t 附加给 scope

```tsx | pure
import { useTranslation } from 'react-i18next';

function TranslationProvider(props) {
  const { t } = useTranslation();
  return (
    <SchemaComponentOptions inherit scope={{ t }}>
      { props.children }
    </SchemaComponentOptions>
  );
}
```

### SchemaComponent

## Hooks

### useSchemaComponentContext()

获取 SchemaComponent 的上下文

```ts
const { refresh, reset } = useSchemaComponentContext();
```

### useDesignable()

获取当前 schema 节点设计器的 API

```ts
const {
  designable,         // 是否可以配置
  patch,              // 更新当前节点配置
  remove,             // 移除当前节点
  insertAdjacent,     // 在某位置插入，四个位置：beforeBegin、afterBegin、beforeEnd、afterEnd
  insertBeforeBegin,  // 在当前节点的前面插入
  insertAfterBegin,   // 在当前节点的第一个子节点前面插入
  insertBeforeEnd,    // 在当前节点的最后一个子节点后面
  insertAfterEnd,     // 在当前节点的后面
} = useDesignable();

const schema = {
  name: uid(),
  'x-component': 'Hello',
};

// 在当前节点的前面插入
insertBeforeBegin(schema);
// 等同于
insertAdjacent('beforeBegin', schema);

// 在当前节点的第一个子节点前面插入
insertAfterBegin(schema);
// 等同于
insertAdjacent('afterBegin', schema);

// 在当前节点的最后一个子节点后面
insertBeforeEnd(schema);
// 等同于
insertAdjacent('beforeEnd', schema);

// 在当前节点的后面
insertAfterEnd(schema);
// 等同于
insertAdjacent('afterEnd', schema);
```

几个插入的位置：

```ts
{
  properties: {
    // beforeBegin 在当前节点的前面插入
    node1: {
      properties: {
        // afterBegin 在当前节点的第一个子节点前面插入
        // ...
        // beforeEnd 在当前节点的最后一个子节点后面
      },
    },
    // afterEnd 在当前节点的后面
  },
}
```

## Examples

<code src="./demos/demo1.tsx" />