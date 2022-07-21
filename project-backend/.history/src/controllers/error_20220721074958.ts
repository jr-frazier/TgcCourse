exports.get404 = (req: any, res: { status: (arg0: number) => { (): any; new(): any; render: { (arg0: string, arg1: { pageTitle: string; path: string; }): void; new(): any; }; }; }, next: any) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
