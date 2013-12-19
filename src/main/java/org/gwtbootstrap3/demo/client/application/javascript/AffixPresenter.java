package org.gwtbootstrap3.demo.client.application.javascript;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import org.gwtbootstrap3.demo.client.application.ApplicationPresenter;
import org.gwtbootstrap3.demo.client.place.NameTokens;

/**
 * @author Joshua Godi
 */
public class AffixPresenter extends Presenter<AffixPresenter.MyView, AffixPresenter.MyProxy> {

    public interface MyView extends View {
    }

    @NameToken(NameTokens.AFFIX)
    @ProxyCodeSplit
    public interface MyProxy extends ProxyPlace<AffixPresenter> {
    }

    @Inject
    public AffixPresenter(EventBus eventBus,
                          MyView view,
                          MyProxy proxy) {
        super(eventBus, view, proxy, ApplicationPresenter.TYPE_SetMainContent);
    }
}