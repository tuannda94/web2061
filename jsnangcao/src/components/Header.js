const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    render: (name = 'WE17101') => (`<div>${name}</div>`)
    // sau mũi tên là ngoặc tròn -> return kết quả
};

export default Header;
