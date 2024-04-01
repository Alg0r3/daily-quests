import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TaskItem from '@/components/TaskItem.vue';

describe('TaskItem', () => {
  it('should display title', () => {
    const wrapper = mount(TaskItem, {
      props: {
        title: 'Test Title',
      },
    });

    expect(wrapper.find('h3').text()).toContain('Test Title');
  });

  it('should display description', () => {
    const wrapper = mount(TaskItem, {
      props: {
        description: 'This is a test description.',
      },
    });

    expect(wrapper.find('p').text()).toContain('test description');
  });

  it('should display default values', () => {
    const wrapper = mount(TaskItem);

    expect(wrapper.find('h3').text()).toContain('Default');
    expect(wrapper.find('p').text()).toContain('Default');
  });
});
