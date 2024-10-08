import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import ProductItem from '../Component/ProductItem.jsx';
import Title from "../Component/Title.jsx";

const Collection = () => {
    const [showfilter, setShowfilter] = useState(false);
    const { products,search ,showsearch} = useContext(ShopContext);
    const [prod, setProd] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [sorttype,setSorttype]=useState('relavent')

    const toggelcategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const toggelsubcategory = (e) => {
        if (subcategory.includes(e.target.value)) {
            setSubcategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubcategory(prev => [...prev, e.target.value]);
        }
    };

    const applyfilter = () => {
        let productCopy = products.slice();
        if(showsearch && search){
            productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category));
        }
        if (subcategory.length > 0) {
            productCopy = productCopy.filter(item => subcategory.includes(item.subcategory));
        }
        setProd(productCopy);
    };
    const sortproduct = () => {
        const cpProduct = prod.slice(); // استخدام prod هنا
        switch (sorttype) {
            case 'low-high':
                setProd(cpProduct.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setProd(cpProduct.sort((a, b) => b.price - a.price));
                break;
            default:
                applyfilter(); // إذا كان نوع الفرز غير معروف، أعد تطبيق الفلاتر
                break;
        }
    };
    useEffect(() => {
        applyfilter();
    }, [category, subcategory,search.showsearch]);
    
    useEffect(() => {
        sortproduct(); // تأكد من استدعاء هذه الوظيفة بعد تحديث الفلاتر
    }, [sorttype, prod]); // أضف prod هنا
    
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
            <div className="min-w-60">
                <p onClick={() => setShowfilter(!showfilter)} className="cursor-pointer text-xl py-5 items-center">
                    FILTER
                    <span className="sm:hidden">
                        <i className={`fa-solid ${showfilter ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                    </span>
                </p>

                <div className={`border border-gray-300 mt-3 pl-3 py-5 sm:block ${showfilter ? '' : 'hidden'}`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <div className="flex gap-2">
                            <input type="checkbox" value={'Men'} onChange={toggelcategory} /> Men
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={'Women'} onChange={toggelcategory} /> Women
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={'Kids'} onChange={toggelcategory} /> Kids
                        </div>
                    </div>
                </div>

                <div className={`border border-gray-300 mt-3 pl-3 py-5 sm:block ${showfilter ? '' : 'hidden'}`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <div className="flex gap-2">
                            <input type="checkbox" value={'winterwear'} onChange={toggelsubcategory} /> Winter Wear
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" value={'summerwear'} onChange={toggelsubcategory} /> Summer Wear
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title title1={'ALL'} title2={'COLLECTION'} />
                    <select onChange={(e)=>setSorttype(e.target.value)}    className="border-2 border-gray-300 text-sm px-2">
                        <option value="relavent"> Sort by:Relevant</option>
                        <option value="low-high">Sort by:Low-High</option>
                        <option value="high-low"> Sort by:High-Low</option>
                    </select>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-7'>
                    {prod.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
