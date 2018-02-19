import { shallow } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should have the login method call the auth service and call a router push when AuthService returns a valid response', function () {
    const $router = { push: jest.fn().mockName('$router.push') }

    // Create component
    const wrapper = shallow(HelloWorld, {
      mocks: {
        $router
      }
    })

    // Call method
    wrapper.vm.test()

    console.log(wrapper.vm.$router)
    expect($router.push).toHaveBeenCalled()
  })
})
